import Api from "./Api";

class ClassDailySettingsApi {
  getAllClassDailySettings() {
    return Api.getAll("/classDailySettings");
  }

  getByDate(date) {
    return Api.get("/classDailySettings/byDate/" + date);
  }

  createClassDailySetting(classDailySetting) {
    return Api.post("/classDailySettings", classDailySetting);
  }

  updateClassDailySetting(classDailySetting) {
    return Api.put("/classDailySettings", classDailySetting);
  }

  deleteClassDailySetting(id) {
    return Api.delete("/classDailySettings/" + id);
  }
}

export default new ClassDailySettingsApi();
