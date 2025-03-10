// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';
import * as _ from './..';

export default class {
}

export function _MateriaiAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Materiai extends Base {
    declare ID?: __.Key<string>
    declare descricao_material?: string | null
    declare attachments?: __.Composition.of.many<Materiais.attachments>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Materiai>;
    declare static readonly elements: __.ElementsOf<Materiai>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Materiai extends _MateriaiAspect(__.Entity) {static drafts: __.DraftOf<Materiai>}
Object.defineProperty(Materiai, 'name', { value: 'Material.Materiais' })
Object.defineProperty(Materiai, 'is_singular', { value: true })
export class Materiais extends Array<Materiai> {static drafts: __.DraftsOf<Materiai>
$count?: number}
Object.defineProperty(Materiais, 'name', { value: 'Material.Materiais' })

export namespace Materiais {
  // enum
  const attachment_status = {
    Unscanned: "Unscanned",
    Scanning: "Scanning",
    Infected: "Infected",
    Clean: "Clean",
    Failed: "Failed",
  } as const;
  type attachment_status = "Unscanned" | "Scanning" | "Infected" | "Clean" | "Failed"
  
  export function _attachmentAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class attachment extends Base {
      declare up_?: __.Key<__.Association.to<Materiai>>
      declare up__ID?: __.Key<string>
      declare createdAt?: __.CdsTimestamp | null
      /** Canonical user ID */
      declare createdBy?: _.User | null
      declare modifiedAt?: __.CdsTimestamp | null
      /** Canonical user ID */
      declare modifiedBy?: _.User | null
      declare ID?: __.Key<string>
      declare url?: string | null
      declare content?: import("stream").Readable | null
      declare mimeType?: string | null
      declare filename?: string | null
      declare status?: attachment_status | null
      declare note?: string | null
      static status = attachment_status;
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<attachment>;
      declare static readonly elements: __.ElementsOf<attachment>;
      declare static readonly actions: globalThis.Record<never, never>;
    };
  }
  /**
  * Aspect for entities with canonical universal IDs
  * 
  * See https://cap.cloud.sap/docs/cds/common#aspect-cuid
  */
  export class attachment extends _attachmentAspect(__.Entity) {static drafts: __.DraftOf<attachment>}
  Object.defineProperty(attachment, 'name', { value: 'Material.Materiais.attachments' })
  Object.defineProperty(attachment, 'is_singular', { value: true })
  /**
  * Aspect for entities with canonical universal IDs
  * 
  * See https://cap.cloud.sap/docs/cds/common#aspect-cuid
  */
  export class attachments extends Array<attachment> {static drafts: __.DraftsOf<attachment>
$count?: number}
  Object.defineProperty(attachments, 'name', { value: 'Material.Materiais.attachments' })
  
}