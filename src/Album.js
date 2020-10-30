import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import { useTranslation } from "react-i18next";

function Copyright() {
  const { t, i18n } = useTranslation();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {t("Copyright")}
      <Link color="inherit" href="https://material-ui.com/">
        {t("Title")}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  title: {
    flexGrow: 1,
  },
  activeLanguage: {
    color: "#111",
    backgroundColor: "#FFF",
  },
  defaultLanguage: {
    color: "#FFF",
    backgroundColor: "inherit",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album(props) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  function handleChange(lang) {
    console.log("selected val is ", lang);
    let currentLang = lang;
    console.log("state value is", currentLang);
    i18n.changeLanguage(currentLang);
    console.log(i18n.language);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {t("Title")}
          </Typography>
          <IconButton
            aria-label="English"
            aria-controls="primary-lang-eng-change"
            aria-haspopup="true"
            classes={
              i18n.language === "en"
                ? { label: classes.activeLanguage }
                : { label: classes.defaultLanguage }
            }
            size="small"
            onClick={() => handleChange("en")}
          >
            En
          </IconButton>
          <IconButton
            aria-label="Hindi"
            aria-controls="primary-lang-eng-change"
            aria-haspopup="true"
            classes={
              i18n.language === "hin"
                ? { label: classes.activeLanguage }
                : { label: classes.defaultLanguage }
            }
            size="small"
            onClick={() => handleChange("hin")}
          >
            Hn
          </IconButton>
          <IconButton
            aria-label="Chinese"
            aria-controls="primary-lang-eng-change"
            aria-haspopup="true"
            classes={
              i18n.language === "chin"
                ? { label: classes.activeLanguage }
                : { label: classes.defaultLanguage }
            }
            size="small"
            onClick={() => handleChange("chin")}
          >
            Ch
          </IconButton>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {t("Title")}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              {t("AppDescription")}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    {t("PrimaryCallOut")}
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    {t("SecondaryCallOut")}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title={t("ImageTitle")}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {t("CardHeading")}
                    </Typography>
                    <Typography>{t("CardDescription")}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      {t("ButtonView")}
                    </Button>
                    <Button size="small" color="primary">
                      {t("ButtonEdit")}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          {t("Footer")}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {t("FooterTagLine")}
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
