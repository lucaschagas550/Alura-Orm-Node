const Router = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const router = Router();

router.get("/pessoas", PessoaController.pegaTodasAsPessoasAtivas);
router.get("/pessoas/todos", PessoaController.pegaTodasAsPessoas);
router.get("/pessoas/:id", PessoaController.pegaUmaPessoa);
router.get("/pessoas/:estudanteId/matricula", PessoaController.pegaMatricula);
router.get(
  "/pessoas/matricula/:turmaId/confirmadas",
  PessoaController.pegaMatriculasPorTurma
);
router.get(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.pegaUmaMatricula
);
router.get("/pessoas/matricula/lotada", PessoaController.pegaTurmasLotadas);
router.post("/pessoas", PessoaController.criaPessoa);
router.put("/pessoas/:id", PessoaController.atualizaPessoa);
router.delete("/pessoas/:id", PessoaController.apagaPessoa);
router.post("/pessoas/:id/restaura", PessoaController.restauraPessoa);

router.post(
  "/pessoas/:estudanteId/Matricula",
  PessoaController.criarUmaMatricula
);
router.put(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.atualizaMatricula
);
router.delete(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.apagaMatricula
);

module.exports = router;
