const queries = {
  userInfo: (email, password) => {
    return `INSERT INTO user_info
                        (email, password)
                            VALUES
                                ("${email}", "${password}" )`;
  },

  addTvShow: (adult, name, original_language, overview, user_id) => {
    return `INSERT INTO tv_show
                (user_id, name, adult, original_language, overview)
                    VALUES 
                        ("${user_id}", "${name}", "${adult}", "${original_language}", "${overview}");`;
  },

  deleteTvShow: (tv_id) => {
    return `DELETE from tv_show
                WHERE id LIKE ${tv_id}`;
  },

  getTvById: (tv_id) => {
    return `SELECT name, adult, original_language, overview
                FROM tv_show 
                    WHERE id LIKE ${tv_id};`;
  },

  updateTvName: (name, tv_id) => {
    return `UPDATE tv_show SET name = "${name}"
                    WHERE id LIKE "${tv_id}";`;
  },

  updateTvType: (adult, tv_id) => {
    return `UPDATE tv_show SET adult = "${adult}"
                WHERE id LIKE "${tv_id}";`;
  },

  updateTvLang: (original_language, tv_id) => {
    return `UPDATE tv_show 
                SET original_language = "${original_language}"
                    WHERE id LIKE "${tv_id}";`;
  },

  updateTvOverview: (overview, tv_id) => {
    return `UPDATE tv_show SET overview = "${overview}"
                        WHERE id LIKE "${tv_id}";`;
  },
};

module.exports = queries;
