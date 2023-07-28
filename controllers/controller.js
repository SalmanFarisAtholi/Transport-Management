const load = require("../modals/load");
const company = require("../modals/company");
const lorry = require("../modals/lorry");

module.exports = {
  index: async (req, res) => {
    res.render("pages/index");
  },
  loads: async (req, res) => {
    try {
      const loadList = await load.find();
      res.render("pages/loads", { loadList });
    } catch (error) {
      console.log(error);
    }
  },
  companies: async (req, res) => {
    try {
      const companylist = await company.find();
      res.render("pages/companies", { companylist });
    } catch (error) {
      console.log(error);
    }
  },
  vehchles: async (req, res) => {
    try {
      const lorryList = await lorry.find();
      res.render("pages/vehchles", { lorryList });
    } catch (error) {
      console.log(error);
    }
  },
  addLorry: (req, res) => {
    res.render("pages/addlorry");
  },
  addLoad: (req, res) => {
    res.render("pages/addload");
  },
  addCompany: (req, res) => {
    res.render("pages/addCompany");
  },
  addCompanyDetailes: async (req, res) => {
    console.log(req.body);
    try {
      const newCompany = new company({
        name: req.body.name,
        address: req.body.address,
        out: req.body.out,
        in: req.body.in,
        description: req.body.description,
      });
      await newCompany.save().then((newone) => {
        console.log("company added success");
        res.redirect("/companies");
      });
    } catch (error) {
      console.log(error);
    }
  },
  addLoadDetailes: async (req, res) => {
    // console.log(req.body);
    try {
      const newLoad = new load({
        lorryNumber: req.body.number,
        driver: req.body.driver,
        start: req.body.start,
        end: req.body.end,
        detailes: req.body.detailes,
        total: req.body.total,
        recived: req.body.ammount,
      });
      await newLoad.save().then((newone) => {
        console.log("Load added success");
        res.redirect("/loads");
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteLoad: async (req, res) => {
    try {
      const id = req.params.id;
      await load.findByIdAndRemove(id).then((newone) => {
        res.redirect("/loads");
      });
    } catch (error) {
      console.log(error);
    }
  },
  editCompany: async (req, res) => {
    try {
      const id = req.params.id;
      const companyDetailes = await company.findById(id);
      res.render("pages/editCompany", { companyDetailes });
    } catch (error) {
      console.log(error);
    }
  },
  editCompanyDetailes: async (req, res) => {
    const id = req.params.id;

    await company
      .updateOne(
        { _id: id },
        {
          $set: {
            name: req.body.name,
            address: req.body.address,
            out: req.body.out,
            in: req.body.in,
            description: req.body.description,
          },
        }
      )
      .then((response) => {
        console.log("updation success");
        res.redirect("/companies");
      });
  },
  addLorryDetailes: async (req, res) => {
    try {
      const newLorry = new lorry({
        number: req.body.number,
        capacity: req.body.capacity,
        description: req.body.description,
      });
      await newLorry.save().then((newone) => {
        console.log("lorry added succes");
        res.redirect("/vehchles");
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteLorry: async (req, res) => {
    try {
      const id = req.params.id;
      await lorry.findByIdAndRemove(id).then((newone) => {
        res.redirect("/vehchles");
      });
    } catch (error) {
      console.log(error);
    }
  },
  more: async (req, res) => {
    try {
      const id = req.params.id;
      const oneLorry = await lorry.findById(id);
      res.render("pages/oneLorry", { oneLorry });
    } catch (error) {
      console.log(error);
    }
  },
  addEntry: async (req, res) => {
    try {
      const id = req.params.id;
      const oneLorry = await lorry.findById(id);
      res.render("pages/addEntry", { oneLorry });
    } catch (error) {
      console.log(error);
    }
  },
  postAddEntry: async (req, res) => {
    try {
      const id = req.params.id;
      const profit = req.body.income - req.body.maintaince;
      const newItem = {
        date: req.body.date,
        income: req.body.income,
        maintaince: req.body.maintaince,
        description: req.body.description,
        profit,
      };
 
      await lorry.updateOne({ _id: id }, { $push: { entry: newItem } });
      console.log("success");
      const oneLorry = await lorry.findById(id);
      res.render("pages/oneLorry", { oneLorry });
      
    } catch (error) {
      console.log(error);
    }
  },
};
