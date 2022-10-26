const AbstractManager = require("./AbstractManager");

class PictureManager extends AbstractManager {
  constructor() {
    super({ table: "picture" });
  }

  insert(picture) {
    return this.connection.query(
      `insert into ${this.table} (file, blurhash) values (?, ?)`,
      [picture.file, picture.blurhash]
    );
  }

  update(picture) {
    return this.connection.query(
      `update ${this.table} set file = ?, blurhash = ? where id = ?`,
      [picture.file, picture.blurhash, picture.id]
    );
  }
}

module.exports = PictureManager;
