module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'fastfeet-db',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
