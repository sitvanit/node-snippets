/** Semver - Semantic Versioning **/

// Semantic versioning is a standardized way to give meaning to your software releases.

/* patch */
// A Patch release is used to signify that the code changes in this revision has not added any new features or api
// changes and is backwards compatible to the previous version. It is most typically used to signify a bug fix.

/* minor */
// A Minor release is used to signify that functionality has been added, but the code is otherwise backwards compatible.
// The most important thing to remember is that this added functionality is optional and by upgrading to this version
// should not require code changes on the part of the user.

/* major */
// When you make changes to the public api and the code is no longer backwards compatible, then you have made “breaking”
// changes. This requires a major revision increase. This can mean a feature was removed or functionality has changed
// that requires the user to make changes to the code to accept the update.

/* pre release */
// Things are slightly different if the Major version is a zero. A zero Major version number indicates that the software
// is in rapid development and does not have a stable API. This also means each minor increase can have breaking changes.
// An example of this is React Native which is currently on version 0.57.8 This means that to upgrade to version 57 from
// 56 may require code changes and may not be compatible with other dependencies in the project. Patch updates should
// still be considered backwards compatible.

// ~ update automatically patch updates.
// ^ update automatically minor updates.


