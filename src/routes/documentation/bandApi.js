exports.addBandSchema = {
  description: 'Create a new band',
  tags: ['bands'],
  summary: 'Creates new band with given values',
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      genre: { type: 'string' },
      description: { type: 'string' },
      label: { type: 'string' },
      featured: { type: 'Boolean' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        genre: { type: 'string' },
        description: { type: 'string' },
        label: { type: 'string' },
        featured: { type: 'Boolean' },
        __v: { type: 'number' }
      }
    }
  }
}