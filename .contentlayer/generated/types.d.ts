// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer2/core'
import * as Local from 'contentlayer2/source-files'

export { isType } from 'contentlayer2/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Achievement = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Achievement'
  /** The name of the degree or certification of your achievement */
  achievement: string
  /** The name of the school, organization, or program you earned your achievement from */
  organization: string
  /** The year you earned your achievement */
  completionYear: number
  /** Markdown file body */
  body: Markdown

}

export type AdditionalInfo = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'AdditionalInfo'
  /** The name of the additional info section */
  title: string
  /** Markdown file body */
  body: Markdown

}

export type Personal = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Personal'
  /** Your first name or given name */
  givenName: string
  /** Your last name or family name */
  familyName: string
  /** Your current job title or a short description of your goal */
  title: string
  /** Your general location of residence, not your personal address */
  location: string
  /** Markdown file body */
  body: Markdown

}

export type PrivateField = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'PrivateField'
  /** A label to describe the private field */
  label: string
  /** Markdown file body */
  body: Markdown

}

export type ProfessionalExperience = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'ProfessionalExperience'
  /** The name of the company or organization you worked with */
  organization: string
  titles: ProfessionalTitle[]
  /** Markdown file body */
  body: Markdown

}

export type Skill = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Skill'
  /** A name for the category of skills */
  title: string
  /** Markdown file body */
  body: Markdown

}  

/** Nested types */
export type ProfessionalTitle = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'ProfessionalTitle'
  /** A title at this organization */
  title: string
  /** The year when you started the role */
  startDate: string
  /** The year when you ended the role, or empty if it is your current role */
  endDate?: string | undefined
  /** A description of the work you did under this role, or your accomplishments that led to a promotion */
  description?: string | undefined

}  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Achievement | AdditionalInfo | Personal | PrivateField | ProfessionalExperience | Skill
export type DocumentTypeNames = 'Achievement' | 'AdditionalInfo' | 'Personal' | 'PrivateField' | 'ProfessionalExperience' | 'Skill'

export type NestedTypes = ProfessionalTitle
export type NestedTypeNames = 'ProfessionalTitle'

export type DataExports = {
  allDocuments: DocumentTypes[]
  personal: Personal
  allSkills: Skill[]
  allProfessionalExperiences: ProfessionalExperience[]
  allAchievements: Achievement[]
  additionalInfo: AdditionalInfo
  allPrivateFields: PrivateField[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Achievement: Achievement
  AdditionalInfo: AdditionalInfo
  Personal: Personal
  PrivateField: PrivateField
  ProfessionalExperience: ProfessionalExperience
  Skill: Skill
}

export type NestedTypeMap = {
  ProfessionalTitle: ProfessionalTitle
}

 