*** Settings ***
Resource  ../resources/main.robot

Suite Setup      Abrir navegador
Test Template    Recebendo dados da planilha

*** Test Cases ***
Recebendo dados da planilha    ${titulo}   ${dt_vencimento}     ${valor}

*** Keywords ***
Recebendo dados da planilha
    [Arguments]    ${titulo}   ${dt_vencimento}    ${valor} 
    Log To Console    Titulo: ${titulo}
    Log To Console    Valor: ${valor}
    Log To Console    Data vencimento: ${dt_vencimento}
    Set Test Variable    ${titulo}
    Set Test Variable    ${dt_vencimento}
    Set Test Variable    ${valor}
    Incluir dados no gerador de arquivo de retorno

Incluir dados no gerador de arquivo de retorno    
    Wait Until Page Contains    Gerador de arquivo de retorno
    # ${dt_cabecalhodia}    Get Date
    # ${dt_cabecalhodiames}    Get Date 
    # ${dt_cabecalhodiaano}    Get Date    
    Input Text      id=numeroDocumento    ${titulo}
                                         #1234567890123
    Input Text      id=valorTitulo        ${valor}
    Input Text      id=valorPagoTitulo    ${valor}
    Input Text      id=DataVencimentoTitulo    030722
    # Log To Console    dia ${dt_cabecalhodia[0:1]}
    # Log To Console    mes ${dt_cabecalhodia[6:7]}
    # Log To Console    ano ${dt_cabecalhodia[6:7]}
    Input Text    id=dataCabecalho    230622
    Click Button    id=adc_titulo


Get Date
        [Arguments]  ${alt}=0d  ${format}=%d%m%Y
        ${data}  Get Current Date  increment=${alt}  result_format=${format}
        [Return]  ${data}

