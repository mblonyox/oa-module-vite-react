interface UserProfile {
  email?: string;
  gravatar?: string;
  id?: string;
  jabatan?: string;
  jenis_jabatan?: string;
  kode_organisasi?: string;
  kode_satker?: string;
  name?: string;
  nip?: string;
  organisasi?: string;
  preferred_username?: string;
  satker?: string;
  sub?: string;
}

interface CustomProps {
  userProfile?: UserProfile;
  token?: string;
}
