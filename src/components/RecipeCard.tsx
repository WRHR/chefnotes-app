import React from 'react'
import { Button, Text } from '@chakra-ui/react'

interface RecipeCardProps {

}

export const RecipeCard: React.FC<RecipeCardProps> = ({}) => {
    return (
      <Card>
        <CardContent>
          <Text>Recipe Name</Text>
          <Text>Recipe decription</Text>
        </CardContent>
    
          <Button>View Recipe</Button>
       
      </Card>
    );
}