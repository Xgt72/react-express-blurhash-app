const AbstractManager = require("./AbstractManager");

class PictureManager extends AbstractManager {
  constructor() {
    super({ table: "picture" });
  }

  insert(picture) {
    return this.connection.query(
      `insert into ${this.table} (filename, description, blurhash, width, height) values (?, ?, ?, ?, ?)`,
      [
        picture.filename,
        picture.description,
        picture.blurhash,
        picture.width,
        picture.height,
      ]
    );
  }

  update(picture) {
    return this.connection.query(
      `update ${this.table} set filename = ?, description = ?, blurhash = ?, width = ?, height = ? where id = ?`,
      [
        picture.filename,
        picture.description,
        picture.blurhash,
        picture.width,
        picture.height,
        picture.id,
      ]
    );
  }
}

module.exports = PictureManager;
