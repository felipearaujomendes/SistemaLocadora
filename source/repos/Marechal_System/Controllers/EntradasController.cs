using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Marechal_System.Models;

namespace Marechal_System.Controllers
{
    [Authorize]
    public class EntradasController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private IQueryable<Entrada> query;

        // GET: Entradas
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Filter(string group1,string filtro)
        {
            if(group1 == null)
            {
                ViewBag.Error = "Escolha um filtro!";
                return View("Index");
            }
                
            if (group1 == "codigo") { 
            query = from m in db.Entradas
                          where m.Codigo.Contains(filtro)
                          select m;
            }
            if(group1 == "nome")
            {
                 query = from m in db.Entradas
                          where m.Nome.Contains(filtro)
                          select m;
            }
            if (group1 == "caixa")
            {
                query = from m in db.Entradas
                        where m.Caixa.Contains(filtro)
                        select m;
            }

            return View("Index", query);
        }

        public ActionResult Post(string teste)
        {
            return View();
        }
        // GET: Entradas/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Entrada entrada = db.Entradas.Find(id);
            if (entrada == null)
            {
                return HttpNotFound();
            }
            return View(entrada);
        }

        // GET: Entradas/Create
        public ActionResult Create()
        {
            ViewBag.UltimoCaixa = db.Entradas.OrderByDescending(x => x.Caixa).FirstOrDefault().Caixa;

            return View();
        }

        // POST: Entradas/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Codigo,Nome,Caixa,Quantidade,DataCadastro")] Entrada entrada)
        {
            
            entrada.DataCadastro = DateTime.Now;

            if (ModelState.IsValid)
            {
                db.Entradas.Add(entrada);
                db.SaveChanges();
                TempData["Success"] = "Dados cadastrados com sucesso!";
                return RedirectToAction("Index");

            }

            return View(entrada);
        }

        // GET: Entradas/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Entrada entrada = db.Entradas.Find(id);
            if (entrada == null)
            {
                return HttpNotFound();
            }
            return View(entrada);
        }

        // POST: Entradas/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Codigo,Nome,Caixa,Quantidade,DataCadastro")] Entrada entrada)
        {
            if (ModelState.IsValid)
            {
                entrada.DataCadastro = DateTime.Now;
                db.Entry(entrada).State = EntityState.Modified;
                db.SaveChanges();
                TempData["Success"] = "Dados editados com sucesso!";
                return RedirectToAction("Index");
            }
            return View(entrada);
        }

        // GET: Entradas/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Entrada entrada = db.Entradas.Find(id);
            if (entrada == null)
            {
                return HttpNotFound();
            }
            return View(entrada);
        }

        // POST: Entradas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Entrada entrada = db.Entradas.Find(id);
            db.Entradas.Remove(entrada);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
