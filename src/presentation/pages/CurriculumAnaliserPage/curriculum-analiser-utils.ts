import { APP_HOST } from '@/main/config/environment/env';
import { INFOJOBS_CLIENT_ID } from '@/main/environment/infojobs-public-api-keys';

export const generateInfojobsAuthUrl = (scope: string, destination: string) => {
    return `https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=${scope}&client_id=${INFOJOBS_CLIENT_ID}&redirect_uri=${APP_HOST}/${destination}&response_type=code`;
};

export const cvScopes = 'CANDIDATE_READ_CURRICULUM_CVTEXT,CV';
