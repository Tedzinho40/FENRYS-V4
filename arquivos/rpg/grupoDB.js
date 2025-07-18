const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'grupos.json');

function getGrupos() {
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '{}');
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
}

function saveGrupos(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function getDataGrupo(groupId) {
  const grupos = getGrupos();
  if (!grupos[groupId]) grupos[groupId] = {};
  return grupos[groupId];
}

function updateGroupData(groupId, newData) {
  const grupos = getGrupos();
  grupos[groupId] = newData;
  saveGrupos(grupos);
}

// 🔹 Exporta as funções
module.exports = {
  getDataGrupo,
  updateGroupData
};