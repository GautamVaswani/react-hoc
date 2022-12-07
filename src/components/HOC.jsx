import React from "react";

const HOC = (WrapperdComponent, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      filter: "",
    };

    componentDidMount() {
      const fetchUsers = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await response.json();
        this.setState((prevState) => {
          return { ...prevState, data: json };
        });
        //   console.log(json);
      };

      fetchUsers();
    }

    render() {
      let { filter, data } = this.state;
      let filteredData = data.slice(0, 10).filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
        } else if (entity === "todos") {
          const { title } = d;
          return title.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
        }
      });
      return (
        <div>
          <h2>{entity}</h2>
          <input
            type="text"
            value={filter}
            onChange={(event) =>
              this.setState({ ...this.state, filter: event.target.value })
            }
          />
          <WrapperdComponent data={filteredData}></WrapperdComponent>
        </div>
      );
    }
  };
};

export default HOC;
