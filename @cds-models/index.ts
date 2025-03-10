// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './_';
import * as _sap_common from './sap/common';

export type Language = __.Association.to<_sap_common.Language>;
export type Currency = __.Association.to<_sap_common.Currency>;
export type Country = __.Association.to<_sap_common.Country>;
export type Timezone = __.Association.to<_sap_common.Timezone>;
export type User = string;
// enum
const MediaData_status = {
  Unscanned: "Unscanned",
  Scanning: "Scanning",
  Infected: "Infected",
  Clean: "Clean",
  Failed: "Failed",
} as const;
type MediaData_status = "Unscanned" | "Scanning" | "Infected" | "Clean" | "Failed"

// the following represents the CDS aspect 'MediaData'
export function _MediaDataAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class MediaData extends Base {
    declare url?: string | null
    declare content?: import("stream").Readable | null
    declare mimeType?: string | null
    declare filename?: string | null
    declare status?: MediaData_status | null
    static status = MediaData_status;
    static readonly kind: 'entity' | 'type' | 'aspect' = 'aspect';
    declare static readonly keys: __.KeysOf<MediaData>;
    declare static readonly elements: __.ElementsOf<MediaData>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class MediaData extends _MediaDataAspect(__.Entity) {}
export class MediaData_ extends Array<MediaData> {$count?: number}
Object.defineProperty(MediaData_, 'name', { value: 'MediaData' })
// the following represents the CDS aspect 'Attachments'
export function _AttachmentAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Attachment extends _managedAspect(_cuidAspect(_MediaDataAspect(Base))) {
    declare note?: string | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'aspect';
    declare static readonly keys: __.KeysOf<Attachment> & typeof cuid.keys;
    declare static readonly elements: __.ElementsOf<Attachment>;
    declare static readonly actions: typeof MediaData.actions & typeof cuid.actions & typeof managed.actions & globalThis.Record<never, never>;
  };
}
/**
* Aspect for entities with canonical universal IDs
* 
* See https://cap.cloud.sap/docs/cds/common#aspect-cuid
*/
export class Attachment extends _AttachmentAspect(__.Entity) {}
/**
* Aspect for entities with canonical universal IDs
* 
* See https://cap.cloud.sap/docs/cds/common#aspect-cuid
*/
export class Attachments extends Array<Attachment> {$count?: number}
Object.defineProperty(Attachments, 'name', { value: 'Attachments' })
// the following represents the CDS aspect 'cuid'
export function _cuidAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class cuid extends Base {
    declare ID?: __.Key<string>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'aspect';
    declare static readonly keys: __.KeysOf<cuid>;
    declare static readonly elements: __.ElementsOf<cuid>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
/**
* Aspect for entities with canonical universal IDs
* 
* See https://cap.cloud.sap/docs/cds/common#aspect-cuid
*/
export class cuid extends _cuidAspect(__.Entity) {}
/**
* Aspect for entities with canonical universal IDs
* 
* See https://cap.cloud.sap/docs/cds/common#aspect-cuid
*/
export class cuid_ extends Array<cuid> {$count?: number}
Object.defineProperty(cuid_, 'name', { value: 'cuid' })
// the following represents the CDS aspect 'managed'
export function _managedAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class managed extends Base {
    declare createdAt?: __.CdsTimestamp | null
    /** Canonical user ID */
    declare createdBy?: User | null
    declare modifiedAt?: __.CdsTimestamp | null
    /** Canonical user ID */
    declare modifiedBy?: User | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'aspect';
    declare static readonly keys: __.KeysOf<managed>;
    declare static readonly elements: __.ElementsOf<managed>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
/**
* Aspect to capture changes by user and name
* 
* See https://cap.cloud.sap/docs/cds/common#aspect-managed
*/
export class managed extends _managedAspect(__.Entity) {}
/**
* Aspect to capture changes by user and name
* 
* See https://cap.cloud.sap/docs/cds/common#aspect-managed
*/
export class managed_ extends Array<managed> {$count?: number}
Object.defineProperty(managed_, 'name', { value: 'managed' })
// the following represents the CDS aspect 'temporal'
export function _temporalAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class temporal extends Base {
    declare validFrom?: __.CdsTimestamp | null
    declare validTo?: __.CdsTimestamp | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'aspect';
    declare static readonly keys: __.KeysOf<temporal>;
    declare static readonly elements: __.ElementsOf<temporal>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
/**
* Aspect for entities with temporal data
* 
* See https://cap.cloud.sap/docs/cds/common#aspect-temporal
*/
export class temporal extends _temporalAspect(__.Entity) {}
/**
* Aspect for entities with temporal data
* 
* See https://cap.cloud.sap/docs/cds/common#aspect-temporal
*/
export class temporal_ extends Array<temporal> {$count?: number}
Object.defineProperty(temporal_, 'name', { value: 'temporal' })