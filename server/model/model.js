const db = require('../db/db.js');

module.exports = {
  get: (params, callback) => {
    const parameter = [params.id];
    const q = `SELECT DISTINCT d.descriptions, d.space, d.access, d.interactions, d.notes, d.reg_number, d.property_type, d.guests, d.bedrooms, d.bath, d.sparkling_clean, d.checkin_exp, d.great_location, b.amenities, c.house_rules 
      FROM descriptions d 
        LEFT JOIN (SELECT da.description_id, a.amenities 
        FROM description_to_amenities da 
        INNER JOIN amenities a 
          ON da.amenities_id = a.id) AS b
        ON d.id = b.description_id
        LEFT JOIN (SELECT dhr.description_id, hr.house_rules
        FROM description_to_house_rules dhr
        INNER JOIN house_rules hr
          ON dhr.house_rules_id = hr.id) AS c
        ON d.id = c.description_id  
        WHERE d.id = ?;`;

    db.con.query(q, parameter, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
};
