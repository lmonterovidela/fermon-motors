import grey from 'material-ui/colors/grey';

const titleColor = grey['800'];
const dreamText = grey['800'];

const styles = {
  heroContainer: {
    height: 720,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  heroTitle: {
    paddingRight: 50,
    maxWidth: 620,
    color: titleColor,
  },
  heroTitleMobile: {
    color: titleColor,
    textAlign: 'center',
  },
  heroMobileContainer: {
    width: '80%',
  },
  heroSubTitle: {
    paddingRight: 50,
    paddingBottom: 40,
    maxWidth: 600,
  },
  heroSubTitleMobile: {
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: 'center',
  },
  heroButton: {
    width: 240,
    height: 50,
  },
  heroButtonMobile: {
    marginTop: 20,
    marginBottom: 40,
  },
  dreamContainer: {
    paddingTop: 50,
    backgroundColor: grey['0'],
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  dreamText: {
    color: dreamText,
    textAlign: 'center',
    maxWidth: '80%',
  },
  dreamTextTintina: {
    color: dreamText,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 50,
  },
  magicContainer: {
    padding: 80,
    paddingBottom: 50,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  magicText: {
    paddingBottom: 30,
    maxWidth: '80%',
    textAlign: 'center',
  },
  featureContainer: {
    paddingBottom: 60,
  },
  featureIcon: {
    fontSize: 60,
    margin: 16,
  },
  featureText: {
    textAlign: 'center',
    maxWidth: 200,
  },
  contactContainer: {
    paddingTop: 50,
    backgroundColor: grey[900],
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  contactButton: {
    marginTop: 40,
    marginBottom: 40,
    width: 250,
    height: 50,
  },
  contactText: {
    color: grey[100],
    textAlign: 'center',
    maxWidth: '80%',
  },
  tintina: {
    fontFamily: 'Pacifico',
    fontSize: 30,
    marginBottom: 40,
    color: '#FFF',
  },
};

export default styles;
