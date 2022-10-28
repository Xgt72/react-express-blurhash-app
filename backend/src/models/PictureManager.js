const AbstractManager = require("./AbstractManager");

class PictureManager extends AbstractManager {
  constructor() {
    super({ table: "picture" });
  }

  insert(picture) {
    return this.connection.query(
      `insert into ${this.table} (filename, description, blurhash) values (?, ?, ?)`,
      [picture.filename, picture.description, picture.blurhash]
    );
  }

  update(picture) {
    return this.connection.query(
      `update ${this.table} set filename = ?, description = ?, blurhash = ? where id = ?`,
      [picture.filename, picture.description, picture.blurhash, picture.id]
    );
  }
}

module.exports = PictureManager;
