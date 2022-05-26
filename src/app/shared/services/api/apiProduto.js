import { Api } from "./Api";

class ApiProduto {
  async Create(data) {
    await Api.post("produtos", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async getAll() {
    const response = await Api.get("produtos?_expand=unidades");
    return response.data;
  }

  async getOne(id) {
    const response = await Api.get(`produtos/${id}`);

    return response.data;
  }
  async put(id, data) {
    await Api.put(`produtos/${id}`, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async delete(id) {
    await Api.delete(`produtos/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async disabledList(){
    const allDisabledProduto = await Api.get('produtos/?prodRecStatus=true')
    return allDisabledProduto
  }
}

export default new ApiProduto();
