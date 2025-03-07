sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'anexo',
            componentId: 'Materiais_attachmentsObjectPage',
            entitySet: 'Materiais_attachments'
        },
        CustomPageDefinitions
    );
});