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
    maxWidth: 400,
  },
  media: {
    height: 200,
  },
});

export default function CardPais(props) {
  const history = useHistory()

  const classes = useStyles();

  return (
    <Card 
      style={{
        width: '300px',
        margin: '30px'
      }}
    className={classes.root}>
      <CardActionArea>
        <CardMedia
          style={{
            height: "200px",
            width: "300px"
          }}
          key={props.nomePais}
          className={classes.media}
          image={props.bandeiraPais}
          title="bandeira"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.nomePais}<br/>
            <i style={{fontSize: '16px', margin: '0'}}>{props.nomeNativo}</i>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Continent: {props.regiaoPais}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Capital: {props.capitalPais}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Population: {(props.populacaoPais).toLocaleString('pt-br')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          onClick={() => irParaDetalhes(history, props.nomePais)}
          size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}