const express = require("express")
const { builtinModules } = require("module")
const issueRouter = express.Router()
const Issue = require('../models/issue')

// Get All Issues
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issues)
    })
  })
  
  // Get issue by User Id
  issueRouter.get("/user", (req, res, next) => {
    Issue.find({ user: req.auth._id }, (err, issues) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issues)
    })
  })
  
  // Add new Issue
  issueRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedIssue)
    })
  })
  
  // Delete Issue
  issueRouter.delete("/:issuedId", (req, res, next) => {
    Issue.findOneAndDelete(
      { _id: req.params.issuedId, user: req.auth._id },
      (err, deletedIssue) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully delete Issue: ${deletedIssue.issue}`)
      }
    )
  })
  
  // Update Issue
  issueRouter.put("/:issuedId", (req, res, next) => {
    Issue.findOneAndUpdate(
      { _id: req.params.issuedId, user: req.auth._id },
      req.body,
      { new: true },
      (err, updatedIssue) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedIssue)
      }
    )
  })

module.exports = issueRouter