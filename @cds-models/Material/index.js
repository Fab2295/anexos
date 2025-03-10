// This is an automatically generated file. Please do not change its contents manually!
const cds = require('@sap/cds')
const csn = cds.entities('Material')
// service
const Material = { name: 'Material' }
module.exports = Material
module.exports.Material = Material
// Materiais
module.exports.Materiai = { is_singular: true, __proto__: csn.Materiais }
module.exports.Materiais = csn.Materiais
// Materiais.attachments
module.exports.Materiais.attachment = { is_singular: true, __proto__: csn['Materiais.attachments'] }
module.exports.Materiais.attachments = csn['Materiais.attachments']
// events
// actions
// enums
module.exports.Materiais.attachment.status ??= { Unscanned: "Unscanned", Scanning: "Scanning", Infected: "Infected", Clean: "Clean", Failed: "Failed" }
