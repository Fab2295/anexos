sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'anexo/test/integration/FirstJourney',
		'anexo/test/integration/pages/MateriaisList',
		'anexo/test/integration/pages/MateriaisObjectPage',
		'anexo/test/integration/pages/Materiais_attachmentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, MateriaisList, MateriaisObjectPage, Materiais_attachmentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('anexo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMateriaisList: MateriaisList,
					onTheMateriaisObjectPage: MateriaisObjectPage,
					onTheMateriais_attachmentsObjectPage: Materiais_attachmentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);