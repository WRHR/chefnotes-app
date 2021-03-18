import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'

interface RecipeCardProps {

}

export const RecipeCard: React.FC<RecipeCardProps> = ({}) => {
    return (
      <Card>
        <CardContent>
          <Typography>Recipe Name</Typography>
          <Typography>Recipe decription</Typography>
        </CardContent>
        <CardActions>
          <Button>View Recipe</Button>
        </CardActions>
      </Card>
    );
}