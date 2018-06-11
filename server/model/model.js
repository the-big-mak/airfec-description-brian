const db = require('../db/db.js');

module.exports = {
  getDesc: (params, callback) => {
    const descriptionParams = [params.id];
    const q = `SELECT descriptions, space, access, interactions, notes
      FROM descriptions
      WHERE id = ?;`;

    db.con.query(q, descriptionParams, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  getSummary: (params, callback) => {
    const summaryParams = [params.id];
    const q = `SELECT property_type AS propertyType, guests, beds, bedrooms, bath
      FROM descriptions
      WHERE id = ?;`;

    db.con.query(q, summaryParams, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  getHighlights: (params, callback) => {
    const highlightParams = [params.id];
    const q = `SELECT sparkling_clean AS sparklingClean, checkin_exp AS checkinExp, great_location AS greatLocation
      FROM descriptions
      WHERE id = ?;`;

    db.con.query(q, highlightParams, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  getAmen: (params, callback) => {
    const amenitiesParams = [params.id];
    const q = `SELECT amenities
      FROM amenities a
      INNER JOIN description_to_amenities da
      ON da.amenities_id = a.id
      WHERE da.description_id = ?;`;

    db.con.query(q, amenitiesParams, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  getRules: (params, callback) => {
    const rulesParams = [params.id];
    const q = `SELECT house_rules AS houseRules
      FROM house_rules hr
      INNER JOIN description_to_house_rules dhr
      ON dhr.house_rules_id = hr.id
      WHERE dhr.description_id = ?;`;

    db.con.query(q, rulesParams, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
};

// const q = `SELECT DISTINCT d.descriptions, d.space, d.access, d.interactions, d.notes, d.reg_number, d.property_type, d.guests, d.bedrooms, d.bath, d.sparkling_clean, d.checkin_exp, d.great_location, b.amenities, c.house_rules 
// FROM descriptions d 
//   LEFT JOIN (SELECT da.description_id, a.amenities 
//   FROM description_to_amenities da 
//   INNER JOIN amenities a 
//     ON da.amenities_id = a.id) AS b
//   ON d.id = b.description_id
//   LEFT JOIN (SELECT dhr.description_id, hr.house_rules
//   FROM description_to_house_rules dhr
//   INNER JOIN house_rules hr
//     ON dhr.house_rules_id = hr.id) AS c
//   ON d.id = c.description_id  
//   WHERE d.id = ?;`;