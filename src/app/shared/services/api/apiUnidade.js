import { Api } from "./Api";

class ApiUnidade {
  async Create(data) {
    await Api
      .post("/unidades", data)
      .then((response) => {
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async getAll() {
    const respost = await Api.get("/unidades");
    return respost.data;
  }

  async getOne(id) {
    await Api
      .get(`/unidades/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async put(id, data) {
    await Api
      .put(`/unidades/${id}`, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async delete(id) {
    await Api
      .get(`/unidades/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async disabledList(){
    const allDisabledProduto = await Api.get('unidades/?unidRecStatus=true')
    return allDisabledProduto
  }
}

export default new ApiUnidade();
