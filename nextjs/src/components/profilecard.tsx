/**
 * @candidate - Implement your profile card design here using MaterialUI
 * library and follow the provided AdobeXD or JPG file. 
 * Feel free to change the code structure and templatee as you see fit - 
 * ultimately, we just want to see how you will create APIs and frontend widgets
 * to interface with these APIs!
 */

import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface ProfileCardProps {
  username: string;
}

export default class ProfileCard extends React.Component<ProfileCardProps, {}> {
  constructor(props: ProfileCardProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <Card style={{ minWidth: 275 }}>
        <CardContent>
          <Typography component="h1" variant="h2" gutterBottom>
            Hi! My name is {this.props.username}!
          </Typography>
          <Typography variant="h5" component="h3" color="textSecondary">
            Author | Freelancer | Coach
          </Typography>
          <Typography style={{marginBottom : 12}} color="textSecondary">
            Available for Hire
          </Typography>
          <Typography variant="body2" component="p">
            I have taught 8 students before and have received 5 stars review!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}
