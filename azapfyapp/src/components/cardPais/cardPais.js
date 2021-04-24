import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import { irParaDetalhes } from '../../routes/coordinator/coordinator'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CardPais(props) {
  const history = useHistory()

  const classes = useStyles();

  return (
    <Card 
      style={{
        margin: '50px'
      }}
    className={classes.root}>
      <CardActionArea>
        <CardMedia
          style={{
            height: "200px"
          }}
          key={props.nomePais}
          className={classes.media}
          image={props.bandeiraPais}
          title="bandeira"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.nomePaisTraducao}<br/>
            <i style={{fontSize: '16px', margin: '0'}}>{props.nomePais}</i>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Continente: {props.regiaoPais}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Capital: {props.capitalPais}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            População: {props.populacaoPais}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          onClick={() => irParaDetalhes(history, props.nomePais)}
          size="small" color="primary">
          Detalhes
        </Button>
      </CardActions>
    </Card>
  );
}