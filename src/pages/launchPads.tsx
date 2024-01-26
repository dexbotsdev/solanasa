
import CardProject from '@/components/CardProject';
import PageLayout from '@/components/PageLayout'
import { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

export default function LaunchPads() {
  const [projects, setProjects] = useState([]);
  const [searchedProject, setSearchedProject] = useState([]);

  const fetchProjects = () => {
    // Where we're fetching data from
    return (
      fetch(`/api/projects.json`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      })
        // We get the API response and receive data in JSON format
        .then((response) => {
          // setIsLoading(true);
          return response.json();
        })
        .then((data) => {
          // setIsLoading(false);
          setProjects(data);
          setSearchedProject(data);
          return;
        })
        .catch((error) => console.error(error))
    );
  };

  const [inputSearch, setInputSearch] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);


  return (
    <PageLayout mobileBarTitle="LaunchPads" metaTitle="Solanasa LaunchPads">
      <div className="title text-2xl mobile:text-lg font-semibold justify-self-start text-white mb-4">LaunchPads</div>

      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="mt-12">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
              {!isEmpty(searchedProject) &&
                searchedProject?.map(
                  ({ id, isAudit, isDoxx, isKYC, isSafu, logoUrl, shortDescription, title, status }) => (
                    <CardProject
                      key={id}
                      name={title}
                      logo={logoUrl}
                      desc={shortDescription}
                      safu={isSafu}
                      audit={isAudit}
                      doxx={isDoxx}
                      kyc={isKYC}
                      link={`/launchpad/${id}`}
                      status={status}
                    />
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
