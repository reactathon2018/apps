const model = require('../models');
const env = process.env.NODE_ENV || "development";
//conts config = require(`${__dirname}/../config/config.json`)[env];

const CandidateService = require("../services").CandidateService;

module.exports = app = {
    async getCandidate(req,res){
        const result = await CandidateService.getCandidate(req,res);
        res.status(200).send(result);
    },
    async saveCandidate(req,res){
        const result = await CandidateService.saveCandidate(req,res);
        res.status(200).send(result);
    },
};