const path = require('path');
const fs = require('fs');
const Sequelize = require('sequelize');

global._ = require("underscore");

global.cerberus = {
  routes: {},
  models: {},
  models_v2: {},
  filters:{
    response:{},
    request:{},
  },
  api: {},
  dao:{},
  operations: {},
  faast_api: {},
  services: {},
  // commontsLogService:{},
  utils: {},
  mock_data: {},
  connection: {},
  dbPool: {},
  cfg: {},
};

// setGlobal(cerberus.cfg, path.join(base_dir, 'cfg'));
// setGlobal(cerberus.connection, path.join(base_dir, 'connection'));
setGlobal(cerberus.routes, path.join(base_dir, 'server/routes'));
// setGlobal(cerberus.models, path.join(base_dir, 'models'));
// setGlobal(cerberus.faast_api, path.join(base_dir, 'api/faast_api'));
// setGlobal(cerberus.services, path.join(base_dir, 'services'));
// setGlobal(cerberus.commontsLogService, path.join(base_dir, 'commontsLogService'));
// setGlobal(cerberus.api, path.join(base_dir, 'api'));
// setGlobal(cerberus.operations, path.join(base_dir, 'operations'));
// setGlobal(cerberus.filters.response, path.join(base_dir, 'filters/responseFilter'));
// setGlobal(cerberus.filters.request, path.join(base_dir, 'filters/requestFilter'));
// setGlobal(cerberus.utils, path.join(base_dir, 'utils'));
// setGlobal(cerberus.mock_data, path.join(base_dir, 'mock_data'));


function setGlobal(param, filePath) {
  fs.readdirSync(filePath).filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== path.basename(module.filename));
  }).forEach(function (file) {
    // if (file.slice(-3) !== '.js') return;
    let fileName = file.slice(0, file.indexOf('.'));
    param[fileName] = path.join(filePath, fileName);
  });
}
