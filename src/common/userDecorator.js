const userDecorator = user => {
  delete user.password;
  delete user.geo;
  delete user.address.alley;
  return user;
};

export default userDecorator;

// address:
// alley: "کوچه بهشتی"
// city: "تبریز"
// country: "ایران"
// geo: {lat: "38.066667", lng: "46.3"}
// number: 168
// street: "خیابان امام"
// __proto__: Object
// avatar: "http://i.pravatar.cc/150?img=3"
// company: "آتیه سازان شرق"
// email: "morad@april.biz"
// id: 1
// name: "محمدرضا راد"
// password: "Ab485652"
// phone: "+989143548471"
// username: "Morad"
// website: "http://hildegard.org"
