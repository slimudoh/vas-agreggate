import React from "react";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import {
  Input,
  TextAreaField,
  FormGroup,
  Upload,
  Icon,
  Button,
  Select,
  Notification
} from "../../components/common";
import { Add } from "../../components/common/customIcon";
import { categoryUrl, fileUpload, secondaryColor } from "../utils/data";
import { axiosFunc } from "../utils/helper";
import cloneDeep from "clone-deep";

const initialState = {
  control: {
    icon: "https://ibb.co/ZM2mWtq",
    name: "",
    description: "",
    dependencies: [""]
  },
  submit: false
};

class CreateCategory extends React.Component {
  state = cloneDeep(initialState);

  onChange = evt => {
    const { control } = this.state;
    control[evt.target.name] = evt.target.value;
    this.setState({
      control
    });
  };

  onChangeDependency = evt => {
    const { control } = this.state;
    const { dependencies } = this.state.control;

    dependencies[parseInt(evt.target.id, 10)] = evt.target.value;

    control.dependencies = dependencies;

    this.setState({ control });
  };

  addNew = () => {
    const { control } = this.state;
    const { dependencies } = this.state.control;

    dependencies.push("");
    control.dependencies = dependencies;
    this.setState({ control });
  };

  removeItem = id => {
    const { control } = this.state;
    const { dependencies } = this.state.control;

    control.dependencies = dependencies.filter((item, pk) => pk !== id);

    this.setState({ control });
  };

  onSubmit = (status, payload) => {
    this.setState({ submit: false });
    if (status) {
      Notification.bubble({
        type: "success",
        content: "Category Added successfully"
      });
      this.setState(initialState);
    } else {
      Notification.bubble({
        type: "error",
        content: "Operation not successfully, Try again later"
      });
    }
  };

  submit = () => {
    this.setState({ submit: true });
    axiosFunc("post", categoryUrl, this.state.control, null, this.onSubmit);
  };

  imageUploaded = e => {
    const { control } = this.state;
    control.icon = e.data.file_url;
    this.setState({
      control
    });
  };

  render() {
    return (
      <AdminLayout navbar={false} activeSideBar={"subscribers"}>
        <div className={"category-container  max-width-1200"}>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.submit();
            }}
          >
            <div className={"padding-20"}>
              <div
                className="flex c-pointer"
                onClick={() => this.props.history.goBack()}
              >
                <div>
                  <Icon size={20} name={"arrowLeft"} type={"feather"} />
                </div>
                <div style={{ marginRight: "10px" }} />
                Back
              </div>

              <br />
              <br />

              <h3>Create New Category</h3>

              <br />
              <br />

              <div className={"flex"}>
                <div className={"cat-upload"}>
                  <Upload
                    single
                    onUploadComplete={this.imageUploaded}
                    fileUploadName={"file_url"}
                    uploadUrl={fileUpload}
                  />
                  <br />
                  <div>Upload Category Icon</div>
                </div>
                <div className={"cat-input"}>
                  <FormGroup title={"Category name"}>
                    <Input
                      name={"name"}
                      value={this.state.control.name}
                      secondary
                      required
                      onChange={this.onChange}
                    />
                  </FormGroup>
                  <FormGroup title={"Category description"}>
                    <TextAreaField
                      placeholder={""}
                      secondary
                      name={"description"}
                      value={this.state.control.description}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="divider" />
            <br />
            <div className={"padding-20"}>
              <small>Specified Documents required for Category</small>
              <br />
              <br />
              <div className={"max-width-700"}>
                {this.state.control.dependencies.map((item, index) => (
                  <div className={"flex align-c"} key={index}>
                    <FormGroup
                      className={"flex-1 margin-r-20"}
                      title={"Document name"}
                    >
                      <Input
                        id={index}
                        secondary
                        value={item}
                        required
                        onChange={this.onChangeDependency}
                      />
                    </FormGroup>
                    <FormGroup title={"File Format"}>
                      <Select secondary />
                    </FormGroup>

                    {this.state.control.dependencies.length > 1 && (
                      <Icon
                        style={{ marginLeft: "10px" }}
                        name={"x"}
                        size={25}
                        onClick={() => this.removeItem(index)}
                        type={"feather"}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div
                className={"flex align-c c-pointer add-new"}
                onClick={this.addNew}
              >
                <Add size={"15px"} color={secondaryColor} /> &nbsp;{" "}
                <small>Add Category</small>
              </div>
              <br />
              <br />

              <Button
                color={"secondary"}
                type={"submit"}
                disabled={this.state.submit}
                loading={this.state.submit}
              >
                Continue
              </Button>
            </div>
          </form>
        </div>
      </AdminLayout>
    );
  }
}

export default CreateCategory;
