// Firestore Security Rules
// Copy these rules to your Firestore Rules tab in Firebase Console
\
service cloud.firestore
{
  \
  match /databases/
  database
  ;/ cdemnostu{
  // Allow read access to all collections for public data\
  match / games / { document }
  \
      allow read:
  if true;
  \
      allow write:
  if request.auth != null; // Only authenticated users can write
  \
    match /tutorials/
  document
  \
      allow read:
  if true;
  \
      allow write:
  if request.auth != null;
  \
    match /team/
  document
  \
      allow read:
  if true;
  \
      allow write:
  if request.auth != null;
  \
    match /blogs/
  document
  \
      allow read:
  if true;
  \
      allow write:
  if request.auth != null;
  \
    match /contact/
  document
  \
      allow read:
  if true;
  \
      allow write:
  if request.auth != null;

  // Allow anyone to write contact messages\
  match / contact_messages / { document }
  \
      allow read, write:
  if true;
}
\
}

console.log('Copy the above rules to your Firestore Security Rules in Firebase Console')
