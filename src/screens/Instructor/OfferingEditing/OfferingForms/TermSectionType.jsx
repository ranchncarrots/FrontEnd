/**
 * Form Component for Editing Offerings
 * - term, section name and access type
 */

import React from 'react'
// Layouts
import { Grid, Form, Input, Select, Button, Icon } from 'semantic-ui-react'
// Vars
import { api, util } from 'utils'

export default function TermSectionTypeSetting({state, onChange, toProgress}) {
  const { offering, terms } = state
  const termOptions = util.getSelectOptions(terms)
  const accessOptions = util.getSelectOptions(api.offeringAccessType)
  const canGoNext = offering.offering.termId && offering.offering.sectionName
  return (
    <>
      <h2>2/3 &ensp; Basic Information</h2>

      <Grid.Row >
        {/* Selection for terms */}
        <Grid.Column>
          <Form.Field
            fluid required search
            control={Select}
            label="Term"
            aria-label="term"
            options={termOptions}
            value={offering.offering.termId}
            onChange={(event, {value}) => onChange(value, 'termId')}
          />
        </Grid.Column>

        {/* Section number */}
        <Grid.Column>
          <Form.Field
            fluid required
            control={Input}
            label="Section Number"
            aria-label="section number"
            placeholder='E.g. AL1'
            value={offering.offering.sectionName}
            onChange={({target: {value}})=> onChange(value, 'sectionName')}
          />
        </Grid.Column>
      </Grid.Row>

      {/* Access type */}
      <Grid.Row >
        <Grid.Column>
          <Form.Field
            fluid required 
            control={Select}
            label="Visibility"
            aria-label="visibility"
            options={accessOptions}
            value={offering.offering.accessType}
            onChange={(event, {value}) => onChange(value, 'accessType')}
          />
        </Grid.Column>
      </Grid.Row>

      {/* Progress buttons */}
      <Grid.Row id="ap-buttons">
        <Grid.Column>
          <Button secondary onClick={()=>toProgress('Courses')} aria-label="go back">
          <Icon name="chevron left"/> Back
          </Button>
        </Grid.Column>
        <Grid.Column className="ap-buttons">
          {!canGoNext && <>Fill out the fields to continue&ensp;&ensp;</>}
          <Button disabled={!canGoNext} secondary onClick={()=>toProgress('Staffs')} aria-label="go next">
            Next <Icon name="chevron right"/>
          </Button>
        </Grid.Column>
      </Grid.Row>
    </>
  )
}