import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React from 'react'

type Props = {}

export default function NoteCard({}: Props) {
  return (
    <>
      <Card variant="outlined" style={{width: "100%", marginBottom: "10px"}}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Изменить</Button>
        </CardActions>
      </Card>
    </>
  )
}