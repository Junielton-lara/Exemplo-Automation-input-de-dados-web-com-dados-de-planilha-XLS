*** Settings ***
## 1.0.5
##########################################################################
#                                 Libraries                              #
##########################################################################

Library  SeleniumLibrary
Library  FakerLibrary  locale=pt_BR
Library  DebugLibrary
Library  RequestsLibrary
Library  OperatingSystem
Library  Collections
Library  DateTime
Library  String
Library  ArchiveLibrary

Library  DataDriver    ${caminhoxls}

##########################################################################
#                                 Resources                              #
##########################################################################

##########################################################################
#                                 Keywords                               #
##########################################################################

##########################################################################
#                                 Elementos                              #
##########################################################################

*** Keywords ***
Abrir navegador
    Open Browser           browser=chrome       options=add_experimental_option('excludeSwitches', ['enable-logging'])
    Go To    ${caminhoapp}
    Maximize Browser Window
    Log To Console    Inicio do teste
Fechar navegador
    Close Browser

*** Variables ***
${caminhoxls}      ${EXECDIR}${/}planilha${/}teste2.xls
${caminhoapp}      ${EXECDIR}${/}app${/}gerar-arquivo-Retorno.html