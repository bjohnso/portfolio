import {Entity, model, property} from '@loopback/repository';

@model()
export class Project extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    default: 'new',
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;


  constructor(data?: Partial<Project>) {
    super(data);
  }
}

export interface ProjectRelations {
  // describe navigational properties here
}

export type ProjectWithRelations = Project & ProjectRelations;
