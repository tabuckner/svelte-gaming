export async function get({ params }) {
  const targetId = +params.id; // NOTE: here be gremlins

  const guides = [
    { id: 1, title: 'some title' },
    { id: 2, title: 'some title 2' },
    { id: 3, title: 'some title 3' },
    { id: 4, title: 'some title 4' },
    { id: 5, title: 'some title 5' },
  ];

  const targetGuide = guides.find(guide => guide.id === targetId)

  if (targetGuide) {
    return {
      status: 200,
      body: {
        guide: targetGuide,
      }
    }
  }

  return {
    status: 404,
  }
}