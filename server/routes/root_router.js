'use strict'

const express = require('express');
const router = express.Router();

// Web router
router.use('/', require(cerberus.routes.web_router));
router.use("/api",require(cerberus.routes.api))
/**
 * root routes
 */
// router.use('/', require(cerberus.routes.index));
// router.use('/workflow', require(cerberus.routes.workflow));
// router.use('/survey', require(cerberus.routes.survey));
// router.use('/super', require(cerberus.routes.super));
// router.use('/vendor', require(cerberus.routes.vendor));
// router.use('/partner', require(cerberus.routes.partner));
// router.use('/vendor-survey', require(cerberus.routes.vendorSurvey));
// router.use('/logout', require(cerberus.routes.logout));
// router.use('/admin', require(cerberus.routes.admin));
// router.use('/internal_user', require(cerberus.routes.internalUser));
// router.use('/authenticate', require(cerberus.routes.authenticate));
// router.use('/approval', require(cerberus.routes.approval));
// router.use('/home', require(cerberus.routes.home));
// router.use('/user', require(cerberus.routes.user));
// router.use('/caseProcessSteps', require(cerberus.routes.caseProcessSteps));
// router.use('/feedback', require(cerberus.routes.feedback));
// router.use('/roleMgmt', require(cerberus.routes.role));
// router.use('/doc', require(cerberus.routes.doc));
// router.use('/document', require(cerberus.routes.document));
// router.use('/note', require(cerberus.routes.note));
// router.use('/report', require(cerberus.routes.report));
// router.use('/countryService', require(cerberus.routes.countryService));
// router.use('/commodity', require(cerberus.routes.commodity));
// router.use('/vet', require(cerberus.routes.vet));
// router.use('/refLib', require(cerberus.routes.refLib));
// router.use('/complianceActivities', require(cerberus.routes.complianceActivities));
// router.use('/recommendation', require(cerberus.routes.recommendation));
// router.use('/category', require(cerberus.routes.category));
// router.use('/apiLog', require(cerberus.routes.apiLog));
// router.use('/dueDiligence', require(cerberus.routes.due));
// router.use('/message', require(cerberus.routes.message));
// router.use('/email', require(cerberus.routes.email));
// router.use('/certification', require(cerberus.routes.certification));

module.exports = router;
