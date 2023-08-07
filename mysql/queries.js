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
                        ("${user_id}", "${name}", "${adult}", "${original_language}", "${overview}";`;
  },
};

module.exports = queries;
