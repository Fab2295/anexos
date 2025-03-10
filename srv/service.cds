// using {Attachments} from '@cap-js/attachments';

define service Material {
    @odata.draft.enabled
    entity Materiais {
        key ID                 : UUID;
            descricao_material : String;
            // attachments        : Composition of many Attachments;
    }
}
