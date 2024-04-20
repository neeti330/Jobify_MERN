import Job from "../models/JobModel";

import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

export const getAllJobs = async (req, res) => {
  await res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    res.status(400).json({ msg: "Please provide company and position" });
    return;
  }
  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(201).json({ job });
};

export const getSingleJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id == id);
  if (!job) {
    res.status(404).json({ msg: "Job not found!" });
    return;
  }
  res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: "Please provide company and position" });
  }
  const { id } = req.params;
  const job = jobs.find((job) => job.id == id);
  if (!job) {
    res.status(404).json({ msg: "Job not found!" });
    return;
  }
  job.company = company;
  job.position = position;
  res.status(200).json({ msg: "Job modified", job });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;
  res.status(200).json({ msg: "Job Deleted" });
};
