var titulos, index;


function  completarvalor(valorTitulo) {
    var novovalor = "";    
    if (valorTitulo.length < 13) {  
        
        for (let index = valorTitulo.length; index < 13; index++) {
            novovalor = novovalor + "0";           
        }
        novovalor = novovalor + valorTitulo;
    }    
    return novovalor;
}

function incluirTitulo(numeroDocumento, valorTitulo, valorPagoTitulo, DataVencimentoTitulo, ) {

    titulos = document.getElementById("tbTitulos");
    var tb = document.getElementById("tbTitulos");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    cellCodigo = linha.insertCell(0);
    cellnumeroDocumento = linha.insertCell(1);
    cellvalorTitulo = linha.insertCell(2);
    cellvalorPagoTitulo = linha.insertCell(3);
    cellDataVencimentoTitulo = linha.insertCell(4);

    cellCodigo.innerHTML = qtdLinhas;
    cellnumeroDocumento.innerHTML = numeroDocumento;
    cellvalorTitulo.innerHTML = completarvalor(valorTitulo);
    cellvalorPagoTitulo.innerHTML = completarvalor(valorTitulo);
    cellDataVencimentoTitulo.innerHTML = DataVencimentoTitulo;

    totalLinhas = qtdLinhas;
    console.log("valor total de linhas =", totalLinhas);
}

var textToWrite = "";



function gerarArquivo() {



    var dataCabecalho = document.getElementById("dataCabecalho").value;



    var textToWrite = "02RETORNO01COBRANCA       00000000000005469645INTERBELLE COMERCIO DE PRODUTO237BRADESCO       " + dataCabecalho + "0160000000022                                                                                                                                                                                                                                                                          " + dataCabecalho + "         000001\r\n";

    var tb = document.getElementById("tbTitulos");

    for (var i = 1; i <= totalLinhas; i++) {
        var nsr = i + 1;

        var row = tb.rows[i];


        console.log("Quantidade de titulos baixados = " + row.cells[0].innerHTML);

        var numeroDocumento = row.cells[1].innerHTML;
        var valorTitulo = row.cells[2].innerHTML;
        var valorPagoTitulo = row.cells[3].innerHTML;
        var DataVencimentoTitulo = row.cells[4].innerHTML;

        var valorFixo = "102111370510001860000009030990003965900000000000000000";
        var valorFixo2 = "23704151  000000000000000000000000000000000000000000000000000000000000000000000000000000";


        textToWrite += valorFixo + numeroDocumento + "00000000000" + numeroDocumento + "00000000000000000000000000906" + dataCabecalho + "00" + numeroDocumento + "00000000000" + numeroDocumento + "0" + DataVencimentoTitulo + "" + valorTitulo + valorFixo2 + valorPagoTitulo + "00000000000000000000000000   " + dataCabecalho + "             00000000000000                                                                  " + geraNsr(nsr++) + "\r\n";
    }

    for (var i = 1; i <= 1; i++) {
        var nsrFinal = nsr + 1;
        textToWrite += "9201237          000000020000000002608600000420          00000000000000000000000026086000020008458914800000200000002608600000000000000000000000000000000000000000000000000000000000000000000                                                                                                                                                                              00000000000000000000000         " + geraNsr(nsr++) + "\r\n";
    }

    function geraNsr(nsr) {
        nsr = nsr.toString();
        while (nsr.length < 6) {
            nsr = "0" + nsr;
        }
        return nsr;
    }


    var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
    var fileNameToSaveAs = "H_CB" + dataCabecalho + "BPB";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}