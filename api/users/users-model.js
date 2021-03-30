const db = require("../data/db-config");



function find() {
    return db("users as u")
       .select("u.id", "u.username", "u.email", "created_at", "updated_at");
}


async function add(user) {
    const [id] = await db("users").insert(user, "id");
    return findById(id);
  }


  function findById(id) {
    return db("users as u")
      .join("roles as r", "u.role", "=", "r.id")
      .select("u.id", "u.username", "r.name as role")
      .where("u.id", id)
      .first();
  }

  module.exports = {
    add,
    find,
    findById,
  };