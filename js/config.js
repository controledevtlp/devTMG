/* =====================================================================
 * config.js  —  CONFIGURAÇÃO DO SITE TMG
 * ---------------------------------------------------------------------
 * Planilha Google Sheets do TMG:
 *   https://docs.google.com/spreadsheets/d/1blACAJyVPhrm47iWswLfNi_QexxrgZbW9RaICvYcWxc/edit
 *
 * Passos para colocar no ar:
 *   1. Abra a planilha acima
 *   2. Extensões > Apps Script > cole o conteúdo de TMG_apps_script.gs
 *   3. Execute configurarTudo() uma vez para criar as abas
 *   4. Implantar > Novo implante > App da Web > acesso "Qualquer pessoa"
 *   5. Copie a URL gerada (termina em /exec) e cole em APPS_SCRIPT_URL abaixo
 * ===================================================================== */
(function (TRJ) {
  TRJ.config = {
    // >>>>>>>>>>>>>>  COLE A URL DO SEU APPS SCRIPT AQUI (termina em /exec)  <<<<<<<<<<<<<<
    APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbw9Hvxe0_0DMYvbfrgGu81_oGZCTgsNLSwkeXtZzbTE8yJHJqr8wn2pLSem3AO3G57ZUw/exec",

    // Referência da planilha (apenas documentação — não é usada pelo sistema)
    SPREADSHEET_URL: "https://docs.google.com/spreadsheets/d/1blACAJyVPhrm47iWswLfNi_QexxrgZbW9RaICvYcWxc/edit",

    // Nome exibido no topo
    APP_NAME: "CONTROLE TMG",
    APP_SUB: "Operacional",

    // Intervalo de auto-atualização do dashboard (segundos). 0 = desligado.
    AUTO_REFRESH_SEG: 0
  };
})(window.TRJ = window.TRJ || {});
